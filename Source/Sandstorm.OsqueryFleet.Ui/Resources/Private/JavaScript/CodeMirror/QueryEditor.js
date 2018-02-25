import {insertAfter, serialize} from '../Utility/dom';

export default (CodeMirror, querySourceElement) => {
    const value = querySourceElement.getAttribute('value');

    const editorElement = document.createElement('div');
    editorElement.classList.add('queryCodeMirror');
    insertAfter(editorElement, querySourceElement);

    const cm = CodeMirror(editorElement, {
        value: value,
        lineNumbers: true,
        mode: "text/x-sql",
        extraKeys: {"Ctrl-Space": "autocomplete"}, // To invoke the auto complete
        hint: CodeMirror.hint.sql,
        hintOptions: {
            tables: OSQUERY_SCHEMA
        }
    });
    cm.on("keyup", (cm, event) => {
        if (!cm.state.completionActive && /*Enables keyboard navigation in autocomplete list*/
            event.keyCode !== 13) {        /*Enter - do not open autocomplete list just after item has been selected in it*/
            CodeMirror.commands.autocomplete(cm, null, {completeSingle: false});
        }
    });
    cm.on('change', () => {
        querySourceElement.setAttribute('value', cm.getValue());
    });
}

