import { Presentation } from "../components/ui/Presentation";

export default function AboutPage() {
  return (
      <div>
        <Presentation/>
        <div className="text-white flex flex-col ">
          <div className="text-3xl font-bold text-center">Contato</div>
          <div className="text-2xl font-semibold text-center">Correo:<a href="mailto:hndrkrms@gmail.com">hndrkrms@gmail.com</a></div>
          <div className="text-2xl font-semibold text-center">Telefono: <a href="https://wa.me/59167028563">+591 67028563</a></div>
          <div className="text-2xl font-semibold text-center">Instagram: <a href="https://www.instagram.com/hndrk0/">@hndrk0</a></div>
          <div className="text-2xl font-semibold text-center">Linkedin: <a href="https://www.linkedin.com/in/hndrk0/">hndrk0</a></div> 
        </div>
      </div>
      
      
  );
}