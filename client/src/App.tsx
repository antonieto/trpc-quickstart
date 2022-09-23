import { useState } from 'react'
import { httpBatchLink } from '@trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { appTrpc } from './api/trpc';
import First from './components/First';
function App() {

  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    appTrpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:8080/trpc'
        })
      ]
    }));

  return (
    <appTrpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <h1 className='text-4xl'>Hello, world!</h1>
          <First />
        </div>
      </QueryClientProvider>
    </appTrpc.Provider>
  )
}

export default App;
