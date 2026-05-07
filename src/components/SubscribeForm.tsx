"use client";

export default function SubscribeForm() {
  return (
    <div className="bg-black py-12 px-6">
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-[11px] uppercase tracking-[0.3em] text-gray-300 mb-8 font-light">
          Subscribe to get notified of new releases, upcoming shows, news &amp; more
        </h3>
        <form
          className="space-y-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-black border border-gray-600 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-black border border-gray-600 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
          />
          <button
            type="submit"
            className="w-full bg-gray-500 hover:bg-gray-400 text-white py-2.5 text-sm uppercase tracking-wider transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
