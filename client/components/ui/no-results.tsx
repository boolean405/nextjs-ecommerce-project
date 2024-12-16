interface NoResultsProps {
  message?: string;
}

const NoResults: React.FC<NoResultsProps> = ({
  message = "No results found",
}) => {
  return (
    <div className="flex items-center justify-center h-full w-full text-muted-foreground">
      {message}
    </div>
  );
};

export default NoResults;
