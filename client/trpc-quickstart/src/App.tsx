import { useState } from 'react'
import { httpBatchLink } from '@trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { blogsTrpc } from './api/blogs';
import First from './components/First';
function App() {

  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    blogsTrpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:8080/api/v1/blogs',
        })
      ]
    }))

  return (
    <blogsTrpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <h1 className='text-4xl'>Hello, world!</h1>
          <First />
        </div>
      </QueryClientProvider>
    </blogsTrpc.Provider>
  )
}

export default App;
