import swal from 'sweetalert2';

export default triggerElement => {
    triggerElement.addEventListener('click', e => {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        fetch(href)
            .then(response => response.text());

        swal({
            title: e.target.getAttribute('data-ajax-modal'),
            onOpen: () => swal.showLoading()
        });
        window.swal = swal;
        window.setTimeout(() =>
                swal({
                    title: e.target.getAttribute('data-ajax-modal'),
                    html: 'Foo',
                    animate: false
                })
            , 1000)

    })
}
