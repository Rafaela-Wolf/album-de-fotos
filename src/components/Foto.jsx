const Foto = ({ dados, setFotoAmpliada }) => {
  return (
    <div className="foto">
      <img src={dados.urls.small} alt={dados.alt_description} onClick={() => setFotoAmpliada(dados)} />
    </div>
  )
}

export default Foto