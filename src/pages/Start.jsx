export default function Start() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      <h1 className="text-3xl sm:text-5xl mb-5">مرحبا بك فى موقع إسلام</h1>
      <p className="mb-5">موقع لتعلم أساسيات الدين الإسلامى بطرق ممتعه و سهلة</p>
      <button className="px-5 py-2.5 text-gray-700 border rounded-md duration-100 hover:border-indigo-600 active:shadow-lg">
        إبدأ الآن
      </button>
      {/* Blob Background */}
      <img src="/svgs/blob.svg" width={800} class="absolute z-[-50]" />
    </section>
  );
}
