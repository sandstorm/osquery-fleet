import swal from 'sweetalert2';

export default triggerElement => {
    triggerElement.addEventListener('click', e => {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        swal({
            title: e.target.getAttribute('data-ajax-modal'),
            onOpen: () => swal.showLoading()
        });

        fetch(href)
            .then(response => response.text())
            .then(responseText => {
                swal.getContent().innerHTML = responseText;
                swal.hideLoading();
            });
    })
}
