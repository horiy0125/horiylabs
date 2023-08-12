import { useNavigate } from 'react-router-dom';
import { BaseTemplate } from '../BaseTemplate';

export const SignInTemplate: React.FC = () => {
  const navigate = useNavigate();

  return (
    <BaseTemplate>
      <h1>horiylabs</h1>

      <section>
        <article>
          <hgroup>
            <h2>Admin</h2>
            <h3>管理者アカウントでログインしてください。</h3>
          </hgroup>

          <button onClick={() => navigate('https://blog.horiy.dev')}>
            Googleアカウントでログイン
          </button>
        </article>
      </section>
    </BaseTemplate>
  );
};
