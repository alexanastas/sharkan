
interface OverlayProps {
    onExit: () => void;

}
function Overlay({onExit} : OverlayProps) {
  return (
     <div
        className="fixed inset-0 bg-gray-300/75 z-99 transition-opacity"
        aria-hidden="true"
        onClick={onExit}
      ></div>

  )
}

export default Overlay