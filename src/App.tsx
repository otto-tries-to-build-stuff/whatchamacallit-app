import { Route, Routes } from 'react-router-dom';
import { FilterProvider } from '@/lib/filters';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { HomePage } from '@/pages/HomePage';
import { EntryDetail } from '@/components/EntryDetail';

export default function App() {
  return (
    <FilterProvider>
      <div className="grid-bg min-h-screen">
        <Header />
        <div className="mx-auto flex max-w-[1320px] gap-8 px-5 py-7">
          <Sidebar />
          <main className="min-w-0 flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/entry/:id" element={<EntryDetail />} />
            </Routes>
          </main>
        </div>
      </div>
    </FilterProvider>
  );
}
