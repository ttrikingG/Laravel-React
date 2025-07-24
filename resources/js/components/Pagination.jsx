export default function Pagination({ currentPage, totalPages, onNext, onPrev, onFirst, onLast }) {
  return (
    <div className="user-pagination">
      <button onClick={onFirst} disabled={currentPage === 1}>⏮ Início</button>
      <button onClick={onPrev} disabled={currentPage === 1}>◀ Anterior</button>
      <span>Página {currentPage} de {totalPages}</span>
      <button onClick={onNext} disabled={currentPage === totalPages}>Próxima ▶</button>
      <button onClick={onLast} disabled={currentPage === totalPages}>Final ⏭</button>
    </div>
  );
}
