export default function copyToClipboard(textToCopy) {
    let textArea;

    function isOS() {
        //can use a better detection logic here
        return navigator.userAgent.match(/ipad|iphone/i);
    }

    function createTextArea(text) {
        textArea = document.createElement('textArea');
        textArea.readOnly = true;
        textArea.contentEditable = true;
        textArea.value = text;
        document.body.appendChild(textArea);
    }

    function selectText() {
        let range, selection;

        if (isOS()) {
            range = document.createRange();
            range.selectNodeContents(textArea);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.setSelectionRange(0, 999999);
        } else {
            textArea.select();
        }
    }

    function copyTo() {
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Link naar plakbord gekopieerd')
    }

    createTextArea(textToCopy);
    selectText();
    copyTo();
}