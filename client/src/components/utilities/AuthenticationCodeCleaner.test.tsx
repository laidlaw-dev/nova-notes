import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { AuthenticationCodeCleaner } from './AuthenticationCodeCleaner';

// Mock react-oidc-context
const mock_useAuth = vi.fn();
vi.mock('react-oidc-context', () => ({
  useAuth: () => mock_useAuth(),
}));

describe('AuthenticationCodeCleaner', () => {
  let spy_replaceState: unknown;

  beforeEach(() => {
    spy_replaceState = vi
      .spyOn(window.history, 'replaceState')
      .mockImplementation(() => {});
  });
  afterEach(() => {
    vi.clearAllMocks();
    vi.restoreAllMocks();
  });
  it('should render nothing', () => {
    mock_useAuth.mockReturnValue({ isLoading: false });

    const { container } = render(<AuthenticationCodeCleaner />);

    expect(container.firstChild).toBeNull();
  });
  it('should not clean URL when code parameter is not present and loading state is true', () => {
    vi.spyOn(window, 'location', 'get').mockImplementation(
      () =>
        ({
          search: '?state=abc',
          pathname: '/test',
        }) as unknown as Location
    );
    mock_useAuth.mockReturnValue({ isLoading: true });

    render(<AuthenticationCodeCleaner />);

    expect(spy_replaceState).not.toHaveBeenCalled();
  });
  it('should not clean URL when code parameter is present and loading state is true', () => {
    vi.spyOn(window, 'location', 'get').mockImplementation(
      () =>
        ({
          search: '?code=123&state=abc',
          pathname: '/test',
        }) as unknown as Location
    );
    mock_useAuth.mockReturnValue({ isLoading: true });

    render(<AuthenticationCodeCleaner />);

    expect(spy_replaceState).not.toHaveBeenCalled();
  });
  it('should not clean URL when code parameter is not present and loading state is false', () => {
    vi.spyOn(window, 'location', 'get').mockImplementation(
      () =>
        ({
          search: '?state=abc',
          pathname: '/test',
        }) as unknown as Location
    );
    mock_useAuth.mockReturnValue({ isLoading: false });

    render(<AuthenticationCodeCleaner />);

    expect(spy_replaceState).not.toHaveBeenCalled();
  });
  it('should clean URL when code parameter is present and loading state is false', () => {
    vi.spyOn(window, 'location', 'get').mockImplementation(
      () =>
        ({
          search: '?code=123&state=abc',
          pathname: '/test',
        }) as unknown as Location
    );

    mock_useAuth.mockReturnValue({ isLoading: false });

    render(<AuthenticationCodeCleaner />);

    expect(spy_replaceState).toHaveBeenCalledWith({}, document.title, '/test');
  });
  it('should handle code parameter in different positions in query string', () => {
    vi.spyOn(window, 'location', 'get').mockImplementation(
      () =>
        ({
          search: '?other=param&code=123&state=abc',
          pathname: '/test',
        }) as unknown as Location
    );
    mock_useAuth.mockReturnValue({ isLoading: false });

    render(<AuthenticationCodeCleaner />);

    expect(spy_replaceState).toHaveBeenCalledWith({}, document.title, '/test');
  });

  it('should clean URL when auth loading state changes from true to false', () => {
    vi.spyOn(window, 'location', 'get').mockImplementation(
      () =>
        ({
          search: '?other=param&code=123&state=abc',
          pathname: '/test',
        }) as unknown as Location
    );
    mock_useAuth.mockReturnValue({ isLoading: true });

    const { rerender } = render(<AuthenticationCodeCleaner />);

    expect(spy_replaceState).not.toHaveBeenCalled();

    // Change auth state to not loading
    mock_useAuth.mockReturnValue({ isLoading: false });

    rerender(<AuthenticationCodeCleaner />);

    expect(spy_replaceState).toHaveBeenCalledWith({}, document.title, '/test');
  });
});
