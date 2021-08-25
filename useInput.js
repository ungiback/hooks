export const useInput = (initialValue, validator) => {
    const [value, setvalue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value }
        } = event;
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setvalue(value);
        }
    };
    return { value, onChange };
};