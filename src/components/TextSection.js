import "./TextSection.css"

const TextSection = ({text}) => {
    // Handle case where text might be an object or null/undefined
    const displayText = typeof text === 'object' && text?.text ? text.text : (text || '');
    
    return (
        <div className="text-section">
            <div className="text-box">
                <p>{displayText}</p>    
            </div>
        </div>
    );
};

export default TextSection;