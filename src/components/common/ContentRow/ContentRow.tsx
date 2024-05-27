<<<<<<< HEAD
import Text from '../Text/Text';
import * as S from './ContentRow.style';

=======
import * as S from './ContentRow.style';

import Text from '../Text/Text';

>>>>>>> todari
interface ContentRowProps {
  title: string;
  content: string;
}

const ContentRow = ({ title, content }: ContentRowProps) => {
  return (
    <S.ContentRow>
      <Text size="m" weight="l">
        {title}
      </Text>
      <Text size="l" weight="l">
        {content}
      </Text>
    </S.ContentRow>
  );
};

export default ContentRow;
