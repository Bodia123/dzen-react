interface IProps {
  title: string;
}

const EmptyTitle: React.FC<IProps> = ({ title }: IProps) => (
  <h3 className="text-center mt-5">{title}</h3>
);
export default EmptyTitle;
