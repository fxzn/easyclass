import { Modal, Button } from "react-bootstrap";
import Input from "./Input";
import { useState } from "react";



function AddData({ showModal, handleClose, handleSave }) {
  const [formData, setFormData] = useState({
    namaKelas: "",
    kategori: "",
    kodeKelas: "",
    tipeKelas: "",
    level: "",
    harga: "",
    materi: "",
  })


  return (
    <Modal show={showModal} onHide={handleClose} >
      <Modal.Header closeButton>
        <Modal.Title className="font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05">Tambah Kelas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Input placeholder="Text" type="text" label="Nama Kelas" name="text" />
          <Input placeholder="Text" type="text" label="Kategori" name="text" />
          <Input placeholder="Text" type="text" label="Kode Kelas" name="text" />
          <Input placeholder="Text" type="text" label="Tipe Kelas" name="text" />
          <Input placeholder="Text" type="text" label="Level" name="text" />
          <Input placeholder="Text" type="text" label="Harga" name="text" />
          <Input placeholder="Paragraph" type="text" label="Materi" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning">Upload Video</Button>
        <Button variant="danger" onClick={handleSave}>
          Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddData;
