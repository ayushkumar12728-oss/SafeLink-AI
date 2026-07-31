import Confetti from "react-confetti";

export default function ConfettiEffect({ show }) {
  if (!show) return null;

  return (
    <Confetti
      recycle={false}
      numberOfPieces={400}
    />
  );
}