import "./TextSection.css"

const TextSection = ({text}) => {
    return (
        <div className="text-section">
            <div className="text-box">
                <p>{text}</p>    
            </div>
        </div>
    );
};

export default TextSection;