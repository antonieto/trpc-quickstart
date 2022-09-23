import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { appTrpc } from './api/trpc';
import First from './components/First';
function App() {

  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    appTrpc.createClient({
      url: 'http://localhost:8080'
    }))

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
