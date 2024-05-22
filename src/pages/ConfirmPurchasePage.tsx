import Header from '../components/Header/Header';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../components/ErrorFallback/ErrorFallback';
import LoadingFallback from '../components/LoadingFallback/LoadingFallback';
import { Suspense } from 'react';
import ConfirmPurchaseSection from '../components/ConfirmPurchaseSection/ConfirmPurchaseSection';
import { Button } from '../components/common/Button/Button.style';

const ConfirmPurchasePage = () => {
  return (
    <>
      <Header type="back" />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>
          <ConfirmPurchaseSection />
        </Suspense>
      </ErrorBoundary>
      <Button
        color="primary"
        width="full"
        radius={0}
        size="l"
        style={{ position: 'fixed', maxWidth: '768px', bottom: '0' }}
        onClick={() => {}}
      >
        결제 확인
      </Button>
    </>
  );
};
export default ConfirmPurchasePage;
