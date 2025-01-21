import NewsMain from './NewsMain';
import {
  LoadingMessage,
  ErrorMessage,
} from '../../components/News/NewsMessage/NewsMessage';

export const News = Object.assign(NewsMain, {
  Loading: LoadingMessage,
  Error: ErrorMessage,
});
