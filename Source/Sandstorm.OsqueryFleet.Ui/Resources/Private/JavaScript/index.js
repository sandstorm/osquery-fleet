require('./CodeMirror');
import AjaxModal from './AjaxModal';

[].forEach.call(document.querySelectorAll("a[data-ajax-modal]"), triggerElement => {
    AjaxModal(triggerElement);
});
