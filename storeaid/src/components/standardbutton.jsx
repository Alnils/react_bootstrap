export default function StandardButton({ text, onClick }) {
    return (
        <button className="standardbutton" onClick={onClick}>
        {text}
        </button>
    );
}

