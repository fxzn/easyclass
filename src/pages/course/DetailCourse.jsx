import { Link } from "react-router-dom";
import "./DetailCourse.css";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faClock, faLock, faShield, faStar, faPlayCircle, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import NavigationBars from "../../components/navigation/NavigationBars";


function DetailCourse() {
  return (
    <>
      <NavigationBars />
      <div className="container detail-course">
        <div className="row">
          <div className="col-md-8 left-content">
            <div className="top-navigation">
              <Link to="/" className="d-flex align-items-start ">
                <FontAwesomeIcon icon={faArrowLeft} />
                <p className="kelas-lain">Kelas Lainnya</p>
              </Link>
            </div>
            <div className="course-details">
              <div className="d-flex justify-content-between align-items-center mb-">
                <h5 className="text-judul">UI/UX Design</h5>
                <span className="d-flex ">
                  <FontAwesomeIcon icon={faStar} className="" />
                  <p className="rating">4.7</p>
                </span>
              </div>
              <h5 className="font-weight-bold mb-1">Intro to Basic of User Interaction Design</h5>
              <p className="fasilator-name">by Simon Doe</p>
              <div className="d-flex flex-wrap align-items-center mb-3 info-course">
                <div className="d-flex mb-2">
                  <FontAwesomeIcon icon={faShield} className="" />
                  <p className="text-course-info">Beginner Level</p>
                </div>
                <span className="d-flex mb-2">
                  <FontAwesomeIcon icon={faBook} />
                  <p className="text-course-info">10 Modul</p>
                </span>
                <span className="d-flex mb-2">
                  <FontAwesomeIcon icon={faClock} />
                  <p className="text-course-info">120 Menit</p>
                </span>
              </div>
              <div>
                <button className="btn btn-telegram">Join Telegram</button>
              </div>
            </div>
            <div>
              <div className="video-section mb-3" />
            </div>
            <div className="tentang-kelas">
              <h1 className="font-weight-bold mb-3 mt-7">Tentang Kelas</h1>
              <p>
                Design system adalah kumpulan komponen design, code, ataupun dokumentasi yang dapat digunakan sebagai panduan utama yang memungkinkan designer serta developer memiliki lebih banyak kontrol atas berbagai platform. Dengan
                hadirnya design system, dapat menjaga konsistensi tampilan user interface dan meningkatkan user experience menjadi lebih baik. Disisi bisnis, design system sangat berguna dalam menghemat waktu dan biaya ketika mengembangkan
                suatu produk.
              </p>
              <p>
                Bersama mentor XXX, kita akan mempelajari design system dari mulai manfaat, alur kerja pembuatannya, tools yang digunakan, hingga pada akhirnya, kita akan membuat MVP dari design system. Selain itu, mentor juga akan
                menjelaskan berbagai resource yang dibutuhkan untuk mencari inspirasi mengenai design system.
              </p>
              <p>
                Kelas ini sesuai untuk Anda yang ingin memahami apa itu design system. Tidak hanya ditujukan untuk UI/UX Designer ataupun Developer, kelas ini sangat sesuai untuk stakeholder lain agar dapat memudahkan tim dalam bekerja
                sama. Yuk segera daftar dan kami tunggu di kelas ya!
              </p>
            </div>
            <div className="mb-5">
              <h1 className="font-weight-bold mb-3">Kelas Ini Ditujukan Untuk</h1>
              <ol className="list-decimal">
                <li>Anda yang ingin memahami poin penting design system</li>
                <li>Anda yang ingin membantu perusahaan lebih optimal dalam membuat design produk</li>
                <li>Anda yang ingin latihan membangun design system</li>
                <li>Anda yang ingin latihan membangun design system</li>
              </ol>
            </div>
          </div>
          <div className="col-md-4 ">
            <Card className="mb-2">
              <Card.Body className="jutify-content-center ">
                <div className="d-flex align-items-center gap-2=">
                  <div className="d-flex justify-content-between w-50 align-items-center">
                    <h1 className="header-content">Materi Belajar</h1>
                  </div>
                  <div className="position-relative">
                    <label className="position-absolute progress-text">90% Progress</label>
                    <progress className="rounded-strip" id="progress" value="60" max="100" ></progress>
                  </div>
                </div>

                <div>
                  <div className="d-flex justify-content-between mt-5 mb-3 header-chapter">
                    <p className="text-dark">Chapter 1 - Pendahuluan</p>
                    <p className="text-dark"> 40 Menit</p>
                  </div>
                  <ol>
                    <li className="my-2 d-flex justify-content-between align-items-center">
                      <p className="d-flex gap-3 align-items-center list-item" >
                        <span className="p-1 align-items-center justify-content-center">1.</span>
                        Anda yang ingin memahami poin penting design system
                      </p>
                      <FontAwesomeIcon icon={faPlayCircle} className="icon-play text-success w-10 h-full" />
                    </li>
                    <li className="my-2 d-flex justify-content-between align-items-center">
                      <p className="d-flex gap-3 align-items-center">
                        <span className="p-1 align-items-center justify-content-center">2</span>
                        Anda yang ingin memahami poin penting design system
                      </p>
                      <FontAwesomeIcon icon={faPlayCircle} className="icon-play text-success w-10 h-full" />
                    </li>
                    <li className="my-2 d-flex justify-content-between align-items-center">
                      <p className="d-flex gap-3 align-items-center">
                        <span className="p-1 align-items-center justify-content-center">4</span>
                        Anda yang ingin memahami poin penting design system
                      </p>
                      <FontAwesomeIcon icon={faPlayCircle} className="icon-play text-dark w-10 h-full" />
                    </li>
                  </ol>
                </div>

                <div>
                  <div className="d-flex justify-content-between header-chapter">
                    <p className="text-dark font-weight-bold">Chapter 2 - Materi</p>
                    <p className="text-dark font-weight-bold"> 120 Menit</p>
                  </div>
                  <ol>
                    <li className="my-2 d-flex justify-content-between align-items-center">
                      <p className="d-flex gap-3 align-items-center">
                        <span className="p-1 align-items-center justify-content-center">1</span>
                        Anda yang ingin memahami poin penting design system
                      </p>
                      <FontAwesomeIcon icon={faLock} className="icon-lock" />
                    </li>
                    <li className="my-2 d-flex justify-content-between align-items-center">
                      <p className="d-flex gap-3 align-items-center">
                        <span className="p-1 align-items-center justify-content-center">2</span>
                        Anda yang ingin memahami poin penting design system
                      </p>
                      <FontAwesomeIcon icon={faLock} className="icon-lock" />
                    </li>
                    <li className="my-2 d-flex justify-content-between align-items-center">
                      <p className="d-flex gap-3 align-items-center">
                        <span className="p-1 align-items-center justify-content-center">3</span>
                        Anda yang ingin memahami poin penting design system
                      </p>
                      <FontAwesomeIcon icon={faLock} className="icon-lock" />
                    </li>
                    <li className="my-2 d-flex justify-content-between align-items-center">
                      <p className="d-flex gap-3 align-items-center">
                        <span className="p-1 align-items-center justify-content-center">4</span>
                        Anda yang ingin memahami poin penting design system
                      </p>
                      <FontAwesomeIcon icon={faLock} className="icon-lock" />
                    </li>
                  </ol>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailCourse;
