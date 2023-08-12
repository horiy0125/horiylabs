import { BaseTemplate } from '../BaseTemplate';

export const SignInTemplate: React.FC = () => {
  return (
    <BaseTemplate>
      <h1>horiylabs</h1>

      <section>
        <article>
          <hgroup>
            <h2>Admin</h2>
            <h3>管理者アカウントでログインしてください。</h3>
          </hgroup>

          <button>Googleアカウントでログイン</button>
        </article>
      </section>
    </BaseTemplate>
  );
};
