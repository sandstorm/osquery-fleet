import CodeMirror from 'codemirror';
require('codemirror/mode/javascript/javascript.js');
require('codemirror/mode/sql/sql.js');
require('codemirror/addon/hint/show-hint.js');
require('codemirror/addon/hint/sql-hint.js');
require('codemirror/addon/merge/merge.js');

import QueryPackEditor from './CodeMirror/QueryPackEditor';
import QueryEditor from './CodeMirror/QueryEditor';

const queryPackSourceJsonElement = document.getElementById('queryPackSourceJson');
if  (queryPackSourceJsonElement) {
    QueryPackEditor(CodeMirror, queryPackSourceJsonElement);
}


const querySourceElement = document.getElementById('querySource');
if  (querySourceElement) {
    QueryEditor(CodeMirror, querySourceElement);
}
