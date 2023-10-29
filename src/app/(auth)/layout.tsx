import '../styles/bootstrap-responsive.css';
import '../styles/bootstrap-responsive.min.css';
import '../styles/bootstrap.css';
import '../styles/bootstrap.min.css';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}</div>
  )
}
