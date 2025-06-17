export default function ImageSlide({ slide }: { slide: string }) {
  return <img src={slide} alt="Imagen de mascota" className="pet__picture-image" />;
}
