import React from 'react';

const Testimonial = () => {
  return (
    <>
      <section className="py-12 bg-gray-100 sm:py-16 lg:py-20 font-sans">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-600 font-pj">157 people have said how good we are</p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Our happy clients say about us</h2>
            </div>

            <div className="mt-8 text-center md:mt-16 md:order-3">
              <a
                href="#"
                title=""
                className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
              >
                Check all 157 reviews
              </a>
            </div>

            <div className="relative mt-10 md:mt-24 md:order-2">
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div
                  className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                  style={{
                    background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                  }}
                ></div>
              </div>

              <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                {/* Testimonial Card 1 */}
                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {Array(5).fill().map((_, index) => (
                          <svg key={index} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                        ))}
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAxAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAMEBQYBBwj/xAA9EAABAwIEAwQIBQMCBwAAAAABAAIDBBEFEiExE0FRBiJhcRQjJDKBkaHBM0Kx0fAHNFJjchUWQ1PC4fH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACARAQEAAgMAAgMBAAAAAAAAAAABAhEDITESQRMiMlH/2gAMAwEAAhEDEQA/ALmrHtL/ADRwjZdqh7S/zRwjZYbSIwpEYTcYT8YViHGhGGrrQnAFSk0LtkQCKyIbslZOWSsgbslZOWXLIG8q5ZO2XCEDRahITxCEhAzlQkJ4hCQgYIQkJ4hAQiwyQhsnSEJCgbsuWThC5ZAFkkdkkECqHtL/ADTkI2XKoe0v805ANlFSYwpEYTUYUiMKxKNoTrQhaE60KoQCKy6Au2QDZKyKyVkA2Ssit/As32h7YUOESupo2moqmAZ2M0EdxzP2F0GisuWXkOLf1TxQ8WGnpYI7nSRhddvxOiyn/NGLGoNT6fUibNcO4p0/nRVH0OQhIXh9L/UfHInXlqOLp+YD7Bejdj+3GH9oQKaSRkNeB+E424ni39kGocEBCeIQEKKaIQEJ4hAQgZIXLJwhCQoGyFyyMhcsiwFkkVkkEKqHtL/NOQjZKqHtT0cAUEmMaKRGE1GNE/GFYU40aJxoSaEQCqOhdSC6g5ZKyJJBnO3NbV4fgUk9G4tdmAc9ouWj/wB6LxSrd6LA+V7jncSfe0eeRPVex/1LrpqDs3IYG3Erwx5tewsf2CyXZvsKMWwiDGcbdkdO3PBTtGgZyJ89/kluosxteUNc6R+fKdT00SL3AZcuxXrdV2VoKdruHHtpsqOtwiljYfVj5Lj+bt1/BXnrX6nupZrEE7DZaOtw2K5ytVBPBwZi07cl0xz253DTTdne3OL4NI0NqHTwA6wzOzNI8Cdj5L23AMYpsewmDEKM+rl0LXWuxw3afEL5ncPgvUf6IV7hNieHuPcc1kzG9DqD/wCPyW2HqxCAhOkICFFNEISE6QgIQNkIbJwhCosDZJFZJBEqx7U5HANlyrHtLkcI2UElgUiMJqMaJ5pyhCnL5dETXKvqanJc9E1HiLebtU2i3ulmUEVbXNHeTkcmYhWCWEQ0QNKMFUMYjRQV9LLTVMbZYnCxaeYTFfG2OlbHHZrWgNa3oBoPou4yyV+Gy8CQxkC5c3e3gvJY8S9FxKQ+kVUrRYuc4Wyg7Gy58l6deL1t8QaMj8zgsZils7srmjXmbJ/tfXvpuG1ri5k0TXttobEaLFN4bpGvdHI5z3WZrcH6rhjht6M81hUHfYa7g3VHiMWZ+ug5HqpzGtcXcMkOGhahqm+pkB3C6Y9OV7ihlblut/8A0Wy/8eqQGi/Avmvra9reN/ssLKvTv6JYNIxtdjUujX+zxDrY3cf0HzXePO9TKApwoCgAoCE4UJQNkISEZQ2UApLqSCPVj2lyOELlX/cuRwhRUhgXXBdYpMLM5HmhWcxSmqXsJj2WaDqtlQWvvYFeqOomuj91UFZhsfHPdUsIrcMzujGZXUA0QQU7Y2hSAFYU40pxpTF041yrNSGNbKS12rba+SzeIdmsPrK+WqqGZYmd97R+a3L7LQRyFl7aErLYxizoIKoyyxxxyENBcSLgX2+YXLOvTwzpgu0L21+IyvqNLu7o6N5J+nwiF1KA69iOtlRT1kj6mVlSIuI512Frldw1eWjDS7Wy5dx2mrVbVUcFNIciqq4tyu8iplZUZnE+Kp6qckEN5lax3XPKwEGHxPiaZHOzONsoXsX9L6xj8Bfh7Ymxmiky3BvnDiTc+N7ryymi4jGkDRn5upXrH9N6CSmweaqlbZ1TLmb4tHP5kreOV255Yz4tWUBThQFdnEBQlGUBQAUKMoUApLqSgYrB7S5HCENX/clHDyUVJYFMpB6wKIzZTqEd4eaosiPV/BUlZ+Krx/4Z8lR1n4qt8ZDG3OpDafRcom5irPK0MukgqJWZUzdTKwtuVWmTvFKHap5bTPc02c0Zh425LFYpQuq8RxB0lPGYoQHNmm1bqBZoH1Wya4EWOxWYxGWmfBV4fiTnNc0htv8ANttCPp9Vzz/1247I83xamHFe4tgef9PRRqNs0Xvl2Q7AuurHEo8MoZH+jOL/ABJuQqGuxDUcF3msTddLZOzlVI67lCvnkbfa4TMlS6U2G/NTcMpTNPFHms6R4jHhc2W5NdVz3vuPVuxPZCiqcFpq7FGSPklJkZFms3JfQeN9/iFvA1sbGxsAa1oAAAsAOi5FEyniZDELMjaGNb0AFrLpK3Jpzt3XCgKIoSqgShKIoCgEoURQoEkkkoGKv+5KODkm6r+5KOHZZaiW1TKORrXKtlfkYmI67K5XejW2okmbk+CpKuVpkKjy4j3VD9I4j7qWmlxSTZbKa+ta1izzZUFRUOazTotSppYVlW1xKruN3iqmWvIks5OR1WYLO10uIpOmire0uAxYvStl9IfT1LQWxvDb5gLXBHx/VSsOZLWzCOG9ju+3db8VP7ZU8kPZ8yUIJko3cVotq8a5gfME/FaktlTqWbeK4h2RxCmEjvSGytvyBCz0uGywuIkvv0Xq1HicFfFdhzMlbfxWYx6NhdZjdQTdcJy3x6MuOXtkqak73uq2w+T0TEKSosDwpmSWPPKQfsuRxWJKjVj3MjL2C7vy+avy3U1qPf8ACcThxbD2VlMCGu0c0m5aeY/nVSiV5n2GxZ2GVMVJUH1E9g+w9152I/T5L0m4yjT4r0WPNHSUJKRKElRXUJXboSgEriRXEHUlxJQMVZ9eUUJ0TdWfXlHCVlp2tNovgqZknrSrWuNoCsRV4n6PWkZuazfWo0dTPlCbjqbqpZWekNBvdSaRkk8zIoWOfI/3WtG/xV+9JVvHMpMgMkQDWZidApUGHU2HNaawmSU62t3B+6YmxR8UuWQgx30tyXbHiv25XPSmxfDG0bopsQkkGd4aGRAd3xJ3+ivYMNw+GEy08RcQ0OBlOY2PhsqvtI0zYY2aN2drHXvvZTMBrxVU4a7Yx2XWceMYudqzwyrlD/WyEk6hvJoJ/nyVpXME1FKxwuHNNx8Fn4LyOe1nvMdZ32/VO9qO0tH2ewF1XVNMj5CI4oGkB0runkBzVSbeQPccJxqqoge42Quj/wBp/Y3C5VzunJ5pmerfjtVx5aZtLO2Nz2uzl2YAE2O2pSprSWB2Xh5cPjdvdxZ/KaMSaABHQURqajiv/Bp/WOPU8v54KyhwSeqc6RuQQxtLpHvPdaPHx8E+6uwt+H+h4TUtm1zyuLSHPPWxG2y1xYb7Y5c9dI0V3vJHXQrcYF2oi4bKbETaRosJuo6H91i4BlCUlmvudmjX6r06efenrUNRHUMD4ZGyN6g3R3XlFHiNZSu4lLO+M8wDotXh/awNhacRGo/OwWJ+B3WLisyau64SolDXQV8HHpZRIzmRy81IustOlcXLpXQdSXElBGqz68ooimqs+0fFFEVmtwOIO9QV5/jlJnnzreYgfUlZ6emdID3bqLtS4PJldkdyW7wMsoKSStk2eMo8s2/xNx8liIMPqn4zBTwRm8sgYDbQC+69B7R0oZhz6aAaRwNewdcjr/db4cP22zyZdCrZxPmZKbtkGW/Q8j9lmoZnSF9NUnXYHxTlPiHpFO2cWzncEbeCDEoiXvnj3a7MPIr1vNB4XUGVtXhs5uSCG3+YULAKh1NM5m3DeAoJrhT4xBUN0Dt/MJ2sPouOVDWe5N3x8QoLvGsWqcLilfRQtkkqC0x8T3GHmT15LHS0lbjFQ2pxaofUTAWZfRrB0aNgFqar2zBzzfFZV1K8BuvLZF2qJaI0T45wy4acrh1BFiqtkApKp4nLmxtOYuA1cDtbxNlsq2NslHPZu3eCzmKZp5oqfcQtA8ydfuPqueeEreGdiHimLVWJ0raGJjaWjabmNjiS49XOO/lp8eVfDhzorOZdsnJw5K5bSCPuk62uQiLLmw2AV1rpLd9otNWPjsKmBxtpnj1+YRVEzJZAYA4Bzcpztsdz+6mRwgi5bogp6UzVGVosb7ojg4cNO6aUnINAOblFgz1cvEl2B7regRYuRPXNpohaOAa+JVnR0zYqd73nK0C58kB4TXzYbUGqh/C2kadBIP3W/oauGtpmVFO67Hjkb26heVTPNXKZSA2EaRs5AdVoOxeJvhrXUh/BqDcEnZ9vuBb5LOWLWNby6QKC6QK5ukHdJcukoIdYfXldiOiZq3e0uXY3LLRVb+6o0Dm3Q4i+0JVXDN3veU3pbGjwWGN2LCTTuMd9Rl+6tq2Zsogldlyg5Xf7ToVncEmMJknc7R88bBfoNT9lYTyPhllgcbNzXYvTxz9Xnzv7MlidK7CMUmgvlge4ujPTwT/pzWOpy43a9gDvhorbtdB6RRCcC5y7LCx1WcOicR3NWud0W96ZPY9EKaU2N25g9rugKnYrJxaegrLd4sDSfFQql5rcKex4IngAADty0jS3gm8LqPSsFmpnOu+A52eIQaTCphkdf3XMN1DlaInWbqCCQo+DT3YAd9QpIkEkbR/gTdUP0jw+KRjzZrm2+iq4IRFG+rm0LnFzQpEbzCZmnY6j4AlQq+TiFlNELtaACb7lAzC107nzO5lS+CGszDdOimyU4YeTdT4p/hsyxjxH0GqCHPGbNib7zgnZSzC6J0jz6xzTbw0RT1cFGeI7vS8gs1i1fJUiSSV+mtgpV0kYLE+rtM82z+teT+UfywUvFKkVJbQ0wuz81uigtmDfR6Nl8gYJJgN3eH2U1kOVzo2gOmebykDQHoPDkoI1RZg4UdnONgT08kUFSaHEaWzrvgka95+I0TlaW4fHprWS/ht/7Y/yKqfcDtdTv4lZyWPYuduiIFQ6aqbJSwPO8kbXfMAqSx2ZcnWHbpIbpKCtrHe0uSY7RM1jvaXJMdos1o1iT+4qGKbJI7zVrij+4s81/feotaATcLDqC3vPne/9B9lo8WjM8AfG68jRe6yMwzYTh9UG9yGV0Tz0N833Wmkqhwo5Gm9m8vJezD+Y8t9M0tQ2tw+Sne7vNHPqvM8Ua6mxMsO2oW6mmFHVtqItIJD3h0Kynb6ER1MFVF7r3B32TIg8CmirWmjqXWO0cgtcA/zZcdh1VhOItc4tkhkuM7XW053B1VLQVHAro3HQXFlr6+f0mhM17uYwjXeynsX7VVJUNiqb5m5c3UKWKkCZwBDgdrG6oNiT1KKnkyPb5psaKe5hdl1PugfRQo6pjat3EAJtoBuen0XRO58B8x+q7h1HGJ+MS5zmkWB+iCaXzzlxyEXKYqag08ZD9w1dxKv4fca+x6BNRU8VfTyGfNnD7BwNirRTzzOmeTmVbiWsIHirOspDSlobKHNcL6tsQq5zIppMsgcQNrdVlVjQnJidZO69oQzLb/K2g+/wWgic3DsOE8rA6WUnLHze47DyVJS5eJEJHANc8yyuPJoH7D6q6EZlZ6bUAte9toYz/wBNn79fkqiiqA/O6apcXzyG5A/RQ82d+xFla1zRHdzsvEI7rR+qrYmudIcyzVbqgqfYKQf6LB8mgLQUsjXRt8lh6WWQwUzW7Nbb6kLXYa0iJpd0Xn+3WeLK6SbuktCnq3+0uXGv0SSWa2r8Wd3PgqFmbiFcSSFazsmxlXhOIU1QwPjD2uLXa+8D+wSc91I3h3Lovy33CSS9XH/Lz5eq+qma13DfrHLofA9VS9p3cfApGyG74ToVxJXLxIyLJrtjk6Gy1uG1gMTWm+V7bFJJZxWotXGIi4DbZRGHvLiSVFjTPs2/RWVO7Je+pa27j1SSVgpJnetceZN/qpNLUSU0Lw1t23Dib8v/AKkkkEfE5MzI/wDaqWN3rXpJLOTUXVBCyecMmJvI9rGtGxAI3/nJaStkDn5ddOSSSmNtlbuM3FRUQMeyWql7zj0UClj4kjiDa/JJJaYs1W4wyga3DKWV2rnMDvnqPoVbQmzABsF1JcL66Tw5mSSSUH//2Q==" alt="" />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">Rehansh Mohta</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">Product Lead</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Card 2 */}
                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {Array(5).fill().map((_, index) => (
                          <svg key={index} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                        ))}
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">“Manish has changed the way I approach web development. Highly recommend!”</p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png" alt="" />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">Harsh</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">Web Designer</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Card 3 */}
                <div className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {Array(5).fill().map((_, index) => (
                          <svg key={index} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                        ))}
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">“The best choice I made was asking Manish for my business. It saved me so much time!”</p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdLCpxwti9WTG5SmOOXmlUQu7eSlpuHXsnA&s" alt="" />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">Sameer Malhotra</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">Product Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End of Testimonial Cards */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;