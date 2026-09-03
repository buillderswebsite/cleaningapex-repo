interface MapProps {
  className?: string;
  height?: string;
}

export default function Map({ className = "", height = "400px" }: MapProps) {
  return (
    <div className={`w-full rounded-xl overflow-hidden shadow-lg ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119263355!2d-0.38178796249999926!3d51.528307984124945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1709654321000!5m2!1sen!2s"
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Cleaning Apex Service Area - London"
      />
    </div>
  );
}
