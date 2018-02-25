import {insertAfter, serialize} from '../Utility/dom';

export default (CodeMirror, queryPackSourceJsonElement) => {
    const value = queryPackSourceJsonElement.getAttribute('value');
    const processedValue = queryPackSourceJsonElement.getAttribute('data-processed');
    const previewUrl = queryPackSourceJsonElement.getAttribute('data-previewUrl');

    const editorElement = document.createElement('div');
    editorElement.classList.add('queryPackCodeMirror');
    insertAfter(editorElement, queryPackSourceJsonElement);

    const dv = CodeMirror.MergeView(editorElement, {
        value: value,
        origLeft: null,
        orig: processedValue,
        lineNumbers: true,
        mode: "json",
        highlightDifferences: true,
        collapseIdentical: false,
        revertButtons: false
    });
    dv.editor().on('change', function () {
        queryPackSourceJsonElement.setAttribute('value', dv.editor().getValue());
        updateDiff();
    })

    function updateDiff() {
        fetch(previewUrl, {
            method: "POST",
            credentials: 'same-origin',
            body: serialize(queryPackSourceJsonElement.closest('form'))
        })
            .then(response =>
                response.text())
            .then(responseText =>
                dv.rightOriginal().setValue(responseText)
            );
    }

    var debounceTimer = null;
    document.getElementById('jqTransformationRules').addEventListener('keyup', () => {
        if (debounceTimer) {
            window.clearTimeout(debounceTimer);
            debounceTimer = null;
        }
        debounceTimer = window.setTimeout(updateDiff, 100);
    });
}

