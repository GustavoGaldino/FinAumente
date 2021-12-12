const Nivel = ({imgSrc, nivel}) => {
    return (
        <div className="nivel-container">
            <div className="nivel-img">
                <img src={imgSrc} />
            </div>
            <div className="nivel-text">Nível {nivel}</div>
        </div>
    );
}

export default Nivel;