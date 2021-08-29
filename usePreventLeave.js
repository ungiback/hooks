export const usePreventleave = () => { // 사이트 페이지를 나갈때 or 새로고침할때 팝업를 띄어서 다시 확인한다.
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = ""; //이 한줄 꼭 넣어줘야 함.
    };

    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () =>
        window.removeEventListener("beforeunload", listener);

    return { enablePrevent, disablePrevent };
};