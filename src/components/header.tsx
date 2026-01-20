import { t as translate } from "../helpers/i18n";

export const Header = ({
  loggedIn,
  accountRegistration,
  allowUnauthenticated,
  hideHistory,
  webroot = "",
}: {
  loggedIn?: boolean;
  accountRegistration?: boolean;
  allowUnauthenticated?: boolean;
  hideHistory?: boolean;
  webroot?: string;
}) => {
  let rightNav: JSX.Element;
  if (loggedIn) {
    rightNav = (
      <ul class="flex gap-4">
        {!hideHistory && (
          <li>
            <a
              class={`
                text-accent-600 transition-all
                hover:text-accent-500 hover:underline
              `}
              href={`${webroot}/history`}
            >
              {translate('history')}
            </a>
          </li>
        )}
        {!allowUnauthenticated ? (
          <li>
            <a
              class={`
                text-accent-600 transition-all
                hover:text-accent-500 hover:underline
              `}
              href={`${webroot}/account`}
            >
              {translate('account')}
            </a>
          </li>
        ) : null}
        {!allowUnauthenticated ? (
          <li>
            <a
              class={`
                text-accent-600 transition-all
                hover:text-accent-500 hover:underline
              `}
              href={`${webroot}/logoff`}
            >
              {translate('logout')}
            </a>
          </li>
        ) : null}
      </ul>
    );
  } else {
    rightNav = (
      <ul class="flex gap-4">
        <li>
          <a
              class={`
                text-accent-600 transition-all
                hover:text-accent-500 hover:underline
              `}
              href={`${webroot}/login`}
            >
              {translate('login')}
            </a>
        </li>
        {accountRegistration ? (
          <li>
            <a
              class={`
                text-accent-600 transition-all
                hover:text-accent-500 hover:underline
              `}
              href={`${webroot}/register`}
            >
              {translate('register')}
            </a>
          </li>
        ) : null}
      </ul>
    );
  }

  return (
    <header class="w-full p-4">
      <nav class={`mx-auto flex max-w-4xl justify-between rounded-sm bg-neutral-900 p-4`}>
        <ul>
          <li>
            <strong>
              <a href={`${webroot}/`}>ConvertX</a>
            </strong>
          </li>
        </ul>
        {rightNav}
      </nav>
    </header>
  );
};
