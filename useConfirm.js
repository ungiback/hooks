export const useConfirm = (message = "", onCofirm, onCancel) => {
    if (!onCofirm || typeof callback !== "function") {
        return;
    }
    if (onCancel && typeof callback !== "function") {
        return;
    }
    const confirmAction = () => {
        if (confirm(message)) {
            onCofirm();
        } else {
            onCancel();
        }
    };
    return confirmAction;
};