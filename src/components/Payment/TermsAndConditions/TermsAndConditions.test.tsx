import { render, screen, fireEvent } from '@testing-library/react';
import TermsAndConditions from '.';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const createWrapper = () => {
    const queryClient = new QueryClient();
    return ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RecoilRoot>{children}</RecoilRoot>
        </BrowserRouter>
      </QueryClientProvider>
    );
  };

describe('TermsAndConditions 컴포넌트', () => {
  test('필수 약관 전체 동의 체크 시 모든 약관이 체크되어야 함', () => {
    render(<TermsAndConditions />, { wrapper: createWrapper() });

    const termsAllCheckbox = screen.getByText('필수 약관 전체 동의');
    fireEvent.click(termsAllCheckbox);

    const individualTermsCheckboxes = screen.getAllByTestId('individual-terms-checkbox');
    individualTermsCheckboxes.forEach((checkbox) => {
      expect(checkbox).toBeChecked();
    });
  });

  test('각 약관을 개별적으로 체크할 수 있어야 함', () => {
    render(<TermsAndConditions />,{ wrapper: createWrapper() });

    const individualTermsCheckboxes = screen.getAllByTestId('individual-terms-checkbox');

    fireEvent.click(individualTermsCheckboxes[0]);
    expect(individualTermsCheckboxes[0]).toBeChecked();

    fireEvent.click(individualTermsCheckboxes[1]);
    expect(individualTermsCheckboxes[1]).toBeChecked();
  });

  test('전체 약관 동의 체크 시 개별 약관 체크를 해제하면 필수 약관 전체 동의도 해제되어야 함', () => {
    render(<TermsAndConditions />,{ wrapper: createWrapper() });

    const termsAllCheckbox = screen.getByText('필수 약관 전체 동의');
    const individualTermsCheckboxes = screen.getAllByTestId('individual-terms-checkbox');

    fireEvent.click(termsAllCheckbox);
    fireEvent.click(individualTermsCheckboxes[0]);

    expect(termsAllCheckbox).not.toBeChecked();
  });
});
