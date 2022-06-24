import React, { useState } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import dropFileImage from "../../resources/images/drop-files.jpg";
import closeIcon from "../../resources/images/close.png";
import mew from "./images/initial.jpg";
import { TitleH1 } from "../styles/Titles";


const Container = styled.div`
  margin: 0 5%;
  background-color: beige;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  align-items: center;
`;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImgCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  .close {
    width: 2rem;
    margin: 0.5rem 0;
    cursor: pointer;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-top: 3.5rem;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(22%, 1fr));
  column-gap: 1rem;
  row-gap: 1.5rem;
  justify-items: center;
  .card {
    object-fit: contain;
    width: 20rem;
  }
  @media (min-width: 450px) {
    grid-template-columns: repeat(auto-fill,minmax(45%, 1fr));
  }
`;

const Upload = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) => Object.assign(file, {
          preview: URL.createObjectURL(file)
        }))
      )
    }
  });

  const images = files.map(file => (
    <ImgCard key={file.name}>
      <img src={closeIcon} alt="close icon" className="close"/>
      <img src={file.preview} style={{width:"200px"}} alt="preview" />
    </ImgCard>
  ))

  return (
    <Container>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <img src={dropFileImage} alt="" style={{width:"300px"}}/>
      </div>
      <Wrap>
        {images}
      </Wrap>
      <br /><br /><br /><br />
      
      <TitleH1>Imagenes almacenadas</TitleH1>
      <ImageContainer>
        <img src={mew} alt="" className="card"/>
        <img src={mew} alt="" className="card" />
        <img src={mew} alt="" className="card" />
        <img src={mew} alt="" className="card" />
        <img src={mew} alt="" className="card" />
      </ImageContainer>
      
    </Container>
  )
  
}

export default Upload;