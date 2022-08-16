export default function Signup() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <h3 className="mb-5 text-2xl">تسجيل الدخول</h3>
      <section className="bg-[#f7f6f6] flex justify-center items-center w-[300px] h-[400px]">
        <form action="#" className="flex flex-col">
          <label htmlFor="" className="self-end my-3">
            الأسم
          </label>
          <input type="text" className="pl-1" />
          <label htmlFor="" className="self-end my-3">
            البريد الإلكترونى
          </label>
          <input type="email" className="pl-1" />
          <label htmlFor="" className="self-end my-3">
            كلمة السر
          </label>
          <input type="password" className="pl-1" />
          <button className="px-5 py-2.5 text-gray-700 border rounded-md duration-100 hover:border-indigo-600 active:shadow-lg mt-5">
            سجل الآن
          </button>
        </form>
      </section>
    </main>
  );
}
