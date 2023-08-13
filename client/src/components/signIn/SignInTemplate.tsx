import { BaseTemplate } from '../common/BaseTemplate';

export const SignInTemplate: React.FC = () => {
  return (
    <BaseTemplate>
      <h1>horiylabs</h1>

      <section>
        <article>
          <h2>ログイン</h2>

          <button>Googleアカウントでログイン</button>
        </article>
      </section>
    </BaseTemplate>
  );
};
