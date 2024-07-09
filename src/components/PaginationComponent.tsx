import { Button } from './ui/button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className='mt-12'>
      <Button 
        onClick={handlePrevious} 
        disabled={currentPage === 1}
        className='h-30 w-30 bg-gray-800 hover:bg-gray-800 disabled:opacity-60'
      >
        Previous
      </Button>
      <span
        className='mx-2'
      >
        {` Page ${currentPage} of ${totalPages} `}
      </span>
      <Button 
        onClick={handleNext} 
        disabled={currentPage === totalPages}
        className='h-30 w-30 bg-gray-800 hover:bg-gray-800 disabled:opacity-60'
      >
        Next
      </Button>
    </div>
  );
};

export default PaginationComponent;
