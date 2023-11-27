import { Link } from "react-router-dom";
import "./Detailcourse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBook, faClock, faShield } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

function DetailCourse() {
  return (
    <section className="mt-5 container">
      <div className="row mt-1">
        <div className="col-12">
          <div className="font-weight-bold h4 d-flex align-items-center px-5 py-4">
            <Link to="/" className="btn btn-outline-primary d-flex align-items-center">
            <FontAwesomeIcon icon={faArrowRight} className="me-2" />
              <p>Kelas Lainnya</p>
            </Link>
          </div>
        </div>
        <div className="flex container gap-20">
          <div className="w-3/5">
            <div className="w-full">
              <div className="container">
                <div className="h-full flex flex-col">
                  <div className="flex justify-between">
                    <h5 className="text-darkblue-05 font-bold pb-1 text-xl">UI/UX Design</h5>
                    <span className="flex">
                      <FontAwesomeIcon icon={faStar} className="h-5 w-5 text-yellow-500"></FontAwesomeIcon>
                      <p>4.7</p>
                    </span>
                  </div>
                  <h5 className="font-bold pb-1 text-xl">Belajar Web Designer dengan Figma</h5>
                  <p>by Angela Doe</p>
                  <div className="flex gap-6">
                    <span className="flex my-2 gap-1">
                      <FontAwesomeIcon icon={faShield} className="h-5 w-5 text-green-500"></FontAwesomeIcon>
                      <p className="text-darkblue-05">Beginner Level</p>
                    </span>
                    <span className="flex my-2 gap-1">
                      <FontAwesomeIcon icon={faBook} className="h-5 w-5 text-green-500"></FontAwesomeIcon>
                      <p>10 Modul</p>
                    </span>
                    <span className="flex my-2 gap-1">
                      <FontAwesomeIcon icon={faClock} className="h-5 w-5 text-green-500"></FontAwesomeIcon>
                      <p>120 Menit</p>
                    </span>
                  </div>
                  <button className="my-5 bg-alert-success h-10 w-64">Join Grup Telegram</button>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="bg-red-600 w-full aspect-video rounded-2xl my-10"></div>
              <div>
                <h1 className="font-bold text-xl mb-3">Tentang Kelas</h1>
                <p className="indent-8 mb-2">
                  Design system adalah kumpulan komponen design, code, ataupun dokumentasi yang dapat digunakan sebagai panduan utama yang memunginkan designer serta developer memiliki lebih banyak kontrol atas berbagai platform. Dengan
                  hadirnya design system, dapat menjaga konsistensi tampilan user interface dan meningkatkan user experience menjadi lebih baik. Disisi bisnis, design system sangat berguna dalam menghemat waktu dan biaya ketika
                  mengembangkan suatu produk.
                </p>
                <p className="indent-8 mb-2">
                  Bersama mentor XXX, kita akan mempelajari design system dari mulai manfaat, alur kerja pembuatannya, tools yang digunakan, hingga pada akhirnya, kita akan membuat MVP dari design system. Selain itu, mentor juga akan
                  menjelaskan berbagai resource yang dibutuhkan untuk mencari inspirasi mengenai design system.
                </p>
                <p className="indent-8">
                  Kelas ini sesuai untuk Anda yang ingin memahami apa itu design system. Tidak hanya ditujukan untuk UI/UX Designer ataupun Developer, kelas ini sangat sesuai untuk stakeholder lain agar dapat memudahkan tim dalam bekerja
                  sama. Yuk segera daftar dan kami tunggu di kelas ya!
                </p>
              </div>
              <div className="mb-5">
                <h1 className="font-bold text-xl mt-8 mb-3">Kelas Ini Ditujukan Untuk</h1>
                <ol className="list-decimal ml-5">
                  <li>Anda yang ingin memahami poin penting design system</li>
                  <li>Anda yang ingin membantu perusahaan lebih optimal dalam membuat design produk</li>
                  <li>Anda yang ingin latihan membangun design system</li>
                  <li>Anda yang ingin latihan membangun design system</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-2xl w-2/5 h-fit">
            <div className="flex items-center gap-2">
              <div className="flex justify-between w-1/2 items-center">
                <h1 className="font-bold text-xl">Materi Belajar</h1>
                {/* <CheckBadgeIcon className="w-4 h-4 text-alert-success" /> */}
              </div>
              <div className="relative">
                {/* <label
                  className="z-10 left-2 top-[2px] absolute text-white text-xs"
                  for="progress"
                >
                  90% Progress
                </label> */}
                <progress className="rounded-full" id="progress" value="90" max="100"></progress>
              </div>

              <div></div>
            </div>

            <div>
              <div className="flex justify-between w-full mt-5 mb-3">
                <p className="text-darkblue-05 font-bold ">Chapter 1 - Pendahuluan</p>
                <p className="text-darkblue-03 font-bold"> 40 Menit</p>
              </div>
              <ol>
                <li className="my-2 flex justify-between items-center">
                  <p className="flex gap-3 items-center">
                    <span className="p-4 leading-none rounded-full bg-darkblue-06 w-6 h-6 grid place-content-center">1</span>
                    Anda yang ingin memahami poin penting design system
                  </p>
                  {/* <PlayCircleIcon className="text-alert-success w-10 h-full" /> */}
                </li>
                <li className="my-2 flex justify-between items-center">
                  <p className="flex gap-3 items-center">
                    <span className="p-4 leading-none rounded-full bg-darkblue-06 w-6 h-6 grid place-content-center">2</span>
                    Anda yang ingin memahami poin penting design system
                  </p>
                  {/* <PlayCircleIcon className="text-alert-success w-10 h-full" /> */}
                </li>
                <li className="my-2 flex justify-between items-center">
                  <p className="flex gap-3 items-center">
                    <span className="p-4 leading-none rounded-full bg-darkblue-06 w-6 h-6 grid place-content-center">3</span>
                    Anda yang ingin memahami poin penting design system
                  </p>
                  {/* <PlayCircleIcon className="text-alert-success w-10 h-full" /> */}
                </li>
                <li className="my-2 flex justify-between items-center">
                  <p className="flex gap-3 items-center">
                    <span className="p-4 leading-none rounded-full bg-darkblue-06 w-6 h-6 grid place-content-center">4</span>
                    Anda yang ingin memahami poin penting design system
                  </p>
                  {/* <PlayCircleIcon className="text-darkblue-05 w-10 h-full" /> */}
                </li>
              </ol>
            </div>
            <div>
              <div className="flex justify-between w-full mt-5 mb-3">
                <p className="text-darkblue-05 font-bold ">Chapter 2 - Materi</p>
                <p className="text-darkblue-03 font-bold"> 120 Menit</p>
              </div>
              <ol>
                <li className="my-2 flex justify-between items-center">
                  <p className="flex gap-3 items-center">
                    <span className="p-4 leading-none rounded-full bg-darkblue-06 w-6 h-6 grid place-content-center">1</span>
                    Anda yang ingin memahami poin penting design system
                  </p>
                  {/* <LockClosedIcon className="text-gray-300 w-10 h-full" /> */}
                </li>
                <li className="my-2 flex justify-between items-center">
                  <p className="flex gap-3 items-center">
                    <span className="p-4 leading-none rounded-full bg-darkblue-06 w-6 h-6 grid place-content-center">2</span>
                    Anda yang ingin memahami poin penting design system
                  </p>
                  {/* <LockClosedIcon className="text-gray-300 w-10 h-full" /> */}
                </li>
                <li className="my-2 flex justify-between items-center">
                  <p className="flex gap-3 items-center">
                    <span className="p-4 leading-none rounded-full bg-darkblue-06 w-6 h-6 grid place-content-center">3</span>
                    Anda yang ingin memahami poin penting design system
                  </p>
                  {/* <LockClosedIcon className="text-gray-300 w-10 h-full" /> */}
                </li>
                <li className="my-2 flex justify-between items-center">
                  <p className="flex gap-3 items-center">
                    <span className="p-4 leading-none rounded-full bg-darkblue-06 w-6 h-6 grid place-content-center">4</span>
                    Anda yang ingin memahami poin penting design system
                  </p>
                  {/* <LockClosedIcon className="text-gray-300 w-10 h-full" /> */}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailCourse;
