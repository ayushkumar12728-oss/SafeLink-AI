import { useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { Upload, ImageIcon, ShieldCheck } from "lucide-react";

export default function QRUpload({ onScan }) {
  const inputRef = useRef(null);

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const scanImage = async (file) => {
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setLoading(true);

    try {
      const qr = new Html5Qrcode("qr-reader-temp");

      const result = await qr.scanFile(file, true);

      onScan(result);

    } catch (err) {
      alert("No valid QR Code found.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <section className="py-20">

      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10 backdrop-blur-xl">

          <div className="text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10">

              <Upload
                size={38}
                className="text-cyan-400"
              />

            </div>

            <h2 className="mt-8 text-3xl font-bold text-white">

              Upload QR Code

            </h2>

            <p className="mt-4 text-slate-400">

              Upload any QR code image and SafeLink AI will
              analyze its contents.

            </p>

          </div>

          <div
            onClick={() => inputRef.current.click()}
            className="mt-12 cursor-pointer rounded-3xl border-2 border-dashed border-cyan-500/30 bg-slate-950/40 p-12 text-center transition hover:border-cyan-400"
          >

            <ImageIcon
              size={60}
              className="mx-auto text-cyan-400"
            />

            <h3 className="mt-6 text-2xl font-bold text-white">

              Click to Upload

            </h3>

            <p className="mt-3 text-slate-400">

              PNG • JPG • JPEG

            </p>

          </div>

          <input
            ref={inputRef}
            hidden
            type="file"
            accept="image/*"
            onChange={(e) =>
              scanImage(e.target.files[0])
            }
          />

          {loading && (

            <div className="mt-10 flex items-center justify-center gap-3 text-cyan-400">

              <ShieldCheck className="animate-pulse" />

              <span>

                Scanning QR Code...

              </span>

            </div>

          )}

          {preview && (

            <div className="mt-12">

              <h3 className="mb-4 text-center text-white font-semibold">

                Uploaded QR

              </h3>

              <img
                src={preview}
                alt="QR Preview"
                className="mx-auto max-h-72 rounded-2xl border border-slate-700"
              />

            </div>

          )}

          {/* Hidden div required by html5-qrcode */}
          <div
            id="qr-reader-temp"
            className="hidden"
          />

        </div>

      </div>

    </section>
  );
}