const Ejercicio5 = () => {
    const divStyle = {
        backgroundColor: 'red',
        color: 'white',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px'
    }

    return (
        <div style={divStyle}>
            <p style={{ color: 'white' }}>Esto es un div con estilos</p>
        </div>
    );
};
  
export default Ejercicio5;
