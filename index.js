$(function () {
            const beachData = {
                north: [
                    { name: "Jökulsárlón Beach", country: "Iceland", desc: "Glacier lagoon", price: 220, img: "https://i.pinimg.com/1200x/1b/28/d0/1b28d08d003db9c6338d2f3cdf4169c0.jpg" },
                    { name: "Playa de las Catedrales", country: "Spain", desc: "Cathedral rocks", price: 180, img: "https://i.pinimg.com/736x/ab/62/6a/ab626ac9e4d3a88a5000c3124e987fa9.jpg" },
                    { name: "Navagio Beach", country: "Greece", desc: "Shipwreck cove", price: 250, img: "https://i.pinimg.com/736x/61/d4/b8/61d4b8158d4cbba198a051b7081f52fa.jpg" },
                    { name: "Skagsanden Beach", country: "Norway", desc: "Arctic beauty", price: 200, img: "https://i.pinimg.com/736x/6a/67/66/6a6766f540b55cf672d81f8038c44be4.jpg" },
                    { name: "Diamond Beach", country: "Iceland", desc: "Ice diamonds", price: 240, img: "https://i.pinimg.com/736x/e6/ca/dc/e6cadc8aa4d2c553db614e5e8ae7ed81.jpg" },
                    { name: "Reynisfjara Beach", country: "Iceland", desc: "Black sand", price: 210, img: "https://i.pinimg.com/1200x/99/6b/db/996bdb6587c5a2a550fba2c6418a49c4.jpg" }
                ],
                south: [
                    { name: "Whitehaven Beach", country: "Australia", desc: "White silica", price: 300, img: "https://i.pinimg.com/736x/df/f3/47/dff34764695e3973066cf711c0325754.jpg" },
                    { name: "Maldives Beaches", country: "Maldives", desc: "Overwater bungalows", price: 450, img: "https://i.pinimg.com/736x/5a/1c/23/5a1c23eca9e329bd154c711b03a57905.jpg" },
                    { name: "Bora Bora", country: "French Polynesia", desc: "Lagoon peaks", price: 390, img: "https://i.pinimg.com/736x/b9/f4/aa/b9f4aac0c51660d68f8dcf6234c33a82.jpg" },
                    { name: "Anse Lazio", country: "Seychelles", desc: "Granite boulders", price: 320, img: "https://i.pinimg.com/736x/7a/f3/ee/7af3ee13e03239549009bc605054128c.jpg" },
                    { name: "Pink Sands Beach", country: "Bahamas", desc: "Pink hue", price: 280, img: "https://i.pinimg.com/736x/1f/df/00/1fdf00d80ddf7c5c09231754528582f0.jpg" },
                    { name: "Copacabana", country: "Brazil", desc: "Vibrant shore", price: 200, img: "https://i.pinimg.com/736x/95/29/7c/95297cde19933569e1db1e066f79e8b8.jpg" }
                ],
                east: [
                    { name: "Palolem Beach", country: "India", desc: "Palm-fringed", price: 140, img: "https://i.pinimg.com/1200x/24/05/aa/2405aa6ebc21eba9e3dae95ef89fad02.jpg" },
                    { name: "Railay Beach", country: "Thailand", desc: "Limestone cliffs", price: 210, img: "https://i.pinimg.com/736x/b6/be/70/b6be7078798fbe79479a76d61d91a410.jpg" },
                    { name: "El Nido", country: "Philippines", desc: "Lagoons", price: 170, img: "https://i.pinimg.com/1200x/68/91/80/689180e2e052e2e5535de592257f1db6.jpg" },
                    { name: "Nusa Dua", country: "Indonesia", desc: "Crystal clear", price: 190, img: "https://i.pinimg.com/1200x/d1/6e/43/d16e43900ae7e195c41b4f05f17bf9f6.jpg" },
                    { name: "Kelingking Beach", country: "Indonesia", desc: "T-rex cliff", price: 160, img: "https://i.pinimg.com/736x/cd/d0/0c/cdd00caa56cca360700eae31a48f1e3a.jpg" },
                    { name: "Seongsan Ilchulbong", country: "South Korea", desc: "Sunrise peak", price: 150, img: "https://i.pinimg.com/1200x/03/51/29/035129969312b5ee017407d1dd4ac0cc.jpg" }
                ],
                west: [
                    { name: "Zuma Beach", country: "USA", desc: "California surf", price: 160, img: "https://i.pinimg.com/736x/b9/42/0a/b9420a608853f8ea4a0eb43d0b66df48.jpg" },
                    { name: "Tulum Beach", country: "Mexico", desc: "Mayan ruins", price: 230, img: "https://i.pinimg.com/1200x/cf/6c/3a/cf6c3ab5ece41869161477148c7b2a08.jpg" },
                    { name: "Waikiki Beach", country: "Hawaii", desc: "Surf spot", price: 280, img: "https://i.pinimg.com/736x/20/29/92/20299279951776f012c07cf5a3a1eb46.jpg" },
                    { name: "Malibu Beach", country: "USA", desc: "Celebrity coast", price: 200, img: "https://i.pinimg.com/736x/b1/3b/be/b13bbe921f164734d0a40cc88eb31a77.jpg" },
                    { name: "Santa Monica", country: "USA", desc: "Pier & sunsets", price: 170, img: "https://i.pinimg.com/736x/a7/c8/f1/a7c8f10784b0c14a9a3cc2abed3500e7.jpg" },
                    { name: "Venice Beach", country: "USA", desc: "Boardwalk vibe", price: 150, img: "https://i.pinimg.com/736x/c5/61/e3/c561e3bdd5bf17bf0d7181e9003c1ad9.jpg" }
                ]
            };

            const currencyRates = { USD: 1, EUR: 0.92, GBP: 0.79, INR: 83.1, JPY: 149.3, AUD: 1.52, CAD: 1.36 };
            const currencySymbols = { USD: '$', EUR: '€', GBP: '£', INR: '₹', JPY: '¥', AUD: 'A$', CAD: 'C$' };
            let currentCurrency = 'USD';

            // ===== NAME VALIDATION =====
            function isValidName(name) {
                // Allow only letters (including unicode), spaces, apostrophes, and hyphens
                return /^[A-Za-z\s'-]+$/.test(name);
            }

            function validateNameField(inputId, errorClass = 'is-invalid') {
                const input = $(`#${inputId}`);
                const valid = isValidName(input.val().trim());
                input.toggleClass(errorClass, !valid);
                return valid;
            }

            // Attach live validation to name fields
            $('#fbName, #contactName, #bookName').on('input', function () {
                const valid = isValidName($(this).val().trim());
                $(this).toggleClass('is-invalid', !valid);
            });

            function formatPrice(usd) {
                const rate = currencyRates[currentCurrency] || 1;
                return `${currencySymbols[currentCurrency] || '$'}${(usd * rate).toFixed(0)}/night`;
            }

            function renderBeaches() {
                $.each(['north', 'south', 'east', 'west'], function (_, zone) {
                    const container = $(`#${zone}Beaches`);
                    container.empty();
                    beachData[zone].forEach(b => {
                        container.append(`
              <div class="col-md-4 col-sm-6">
                <div class="zone-card card h-100">
                  <img src="${b.img}" class="card-img-top" alt="${b.name}">
                  <div class="card-body d-flex flex-column">
                    <span class="zone-badge">${zone.toUpperCase()}</span>
                    <h5 class="card-title mt-2">${b.name}</h5>
                    <p><i class="fas fa-map-marker-alt"></i> ${b.country}</p>
                    <p class="small">${b.desc}</p>
                    <div class="mt-auto d-flex justify-content-between align-items-center">
                      <span class="price-tag">${formatPrice(b.price)}</span>
                      <button class="btn btn-book btn-sm book-btn" data-beach="${b.name}" data-price="${b.price}">Book</button>
                    </div>
                  </div>
                </div>
              </div>
            `);
                    });
                });
                populateBeachSelector();
            }

            function populateBeachSelector() {
                const selector = $('#fbBeach');
                selector.empty();
                selector.append('<option value="">Choose a beach...</option>');
                $.each(['north', 'south', 'east', 'west'], function (_, zone) {
                    const optgroup = $(`<optgroup label="${zone.toUpperCase()} Zone">`);
                    beachData[zone].forEach(b => {
                        optgroup.append(`<option value="${b.name}">${b.name} - ${b.country}</option>`);
                    });
                    selector.append(optgroup);
                });
            }

            renderBeaches();

            $('#currencySelect').on('change', function () {
                currentCurrency = $(this).val();
                renderBeaches();
            });

            $('#themeToggle').on('click', function () {
                $('body').toggleClass('dark-mode');
                const dark = $('body').hasClass('dark-mode');
                $(this).find('i').attr('class', dark ? 'fas fa-sun' : 'fas fa-moon');
                localStorage.setItem('theme', dark ? 'dark' : 'light');
            });
            if (localStorage.getItem('theme') === 'dark') {
                $('body').addClass('dark-mode');
                $('#themeToggle i').attr('class', 'fas fa-sun');
            }

            let selectedBeach, selectedPriceBase;
            $(document).on('click', '.book-btn', function () {
                selectedBeach = $(this).data('beach');
                selectedPriceBase = $(this).data('price');
                $('#bookBeach').val(selectedBeach);
                $('#bookPrice').val(formatPrice(selectedPriceBase));
                $('#bookName, #bookEmail, #bookCheckin, #bookCheckout').val('');
                $('#bookGuests').val(2);
                $('#bookNights').val('');
                new bootstrap.Modal(document.getElementById('bookingModal')).show();
            });

            $('#bookCheckin, #bookCheckout').on('change', function () {
                const ci = $('#bookCheckin').val(), co = $('#bookCheckout').val();
                if (ci && co) {
                    const diff = Math.ceil((new Date(co) - new Date(ci)) / 86400000);
                    $('#bookNights').val(diff > 0 ? diff + ' nights' : 'Invalid');
                }
            });

            $('#confirmBookingBtn').on('click', function () {
                const nameValid = validateNameField('bookName');
                if (!nameValid) {
                    alert('Name cannot contain numbers or special characters.');
                    return;
                }
                if (!$('#bookName').val() || !$('#bookEmail').val() || $('#bookNights').val() === 'Invalid' || !$('#bookNights').val()) {
                    alert('Please fill correctly');
                    return;
                }
                const booking = {
                    beach: selectedBeach,
                    price: formatPrice(selectedPriceBase),
                    name: $('#bookName').val(),
                    checkin: $('#bookCheckin').val(),
                    checkout: $('#bookCheckout').val(),
                    nights: $('#bookNights').val()
                };
                let bookings = JSON.parse(localStorage.getItem('beachBookings') || '[]');
                bookings.push(booking);
                localStorage.setItem('beachBookings', JSON.stringify(bookings));
                bootstrap.Modal.getInstance(document.getElementById('bookingModal')).hide();
                alert('Booked!');
                renderBookings();
            });

            function renderBookings() {
                const bookings = JSON.parse(localStorage.getItem('beachBookings') || '[]');
                const container = $('#bookingsList');
                container.empty();
                if (bookings.length === 0) {
                    container.html('<p class="text-muted text-center">No bookings yet.</p>');
                    return;
                }
                bookings.forEach((b, index) => {
                    container.append(`
            <div class="booking-item p-3 rounded shadow-sm mb-3">
              <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
                <h6 class="mb-1">${b.beach} <span class="badge bg-primary">${b.nights}</span></h6>
                <div class="d-flex align-items-center gap-2">
                  <span class="price-tag">${b.price}</span>
                  <button class="btn btn-sm btn-outline-danger cancel-booking" data-index="${index}"><i class="fas fa-times"></i> Cancel</button>
                </div>
              </div>
              <p class="small text-muted mb-0">👤 ${b.name} | 📅 ${b.checkin} → ${b.checkout}</p>
            </div>
          `);
                });
            }

            $(document).on('click', '.cancel-booking', function () {
                const index = $(this).data('index');
                let bookings = JSON.parse(localStorage.getItem('beachBookings') || '[]');
                if (index >= 0 && index < bookings.length) {
                    bookings.splice(index, 1);
                    localStorage.setItem('beachBookings', JSON.stringify(bookings));
                    renderBookings();
                }
            });

            renderBookings();

            const galleryImages = [
                { src: "https://i.pinimg.com/1200x/ea/a1/f3/eaa1f3921b5aa1bac076c4b81aad5714.jpg", label: "Paradise" },
                { src: "https://i.pinimg.com/736x/a1/6a/3a/a16a3aabf9b28249cbb31decded52e96.jpg", label: "Crystal" },
                { src: "https://i.pinimg.com/736x/d4/8e/67/d48e679b6ff64e246a30679c7bc65fa1.jpg", label: "Sunset" },
                { src: "https://i.pinimg.com/1200x/1a/90/c5/1a90c5b8444e86bb54c11923973d2966.jpg", label: "Sands" },
                { src: "https://i.pinimg.com/736x/55/dc/db/55dcdb00574dd77c324182e13936d723.jpg", label: "Cliffs" },
                { src: "https://i.pinimg.com/736x/10/55/7a/10557ac0a268e11dee9e9a1d664fcb31.jpg", label: "Lagoon" }
            ];
            galleryImages.forEach(img => {
                $('#galleryGrid').append(`<div class="col-md-4 col-sm-6"><div class="gallery-item"><img src="${img.src}" alt="${img.label}"><div class="gallery-overlay"><span>${img.label}</span></div></div></div>`);
            });

            const queries = [
                { q: "How to explore beaches?", a: "Use Beaches dropdown to navigate zones." },
                { q: "Can I submit recommendations?", a: "Absolutely! We'd love to hear your hidden gems via the Feedback form." },
                { q: "Is site mobile friendly?", a: "Yes, it's fully responsive for all devices." },
                { q: "How to book?", a: "Simply click the Book button on any beach card." }
            ];
            queries.forEach(item => $('#queriesList').append(`<div class="query-item p-4 rounded shadow-sm mb-3"><h6>${item.q}</h6><p class="text-muted mb-0">${item.a}</p></div>`));
            let cachedLocation = null;
            let locationFetched = false;

            function fetchLocation() {
                if (locationFetched) return;
                locationFetched = true;
                if (!navigator.geolocation) {
                    cachedLocation = 'Geolocation not supported';
                    $('#tickerLocation').text(cachedLocation);
                    return;
                }
                navigator.geolocation.getCurrentPosition(
                    async pos => {
                        try {
                            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&zoom=10&accept-language=en`);
                            const data = await res.json();
                            const addr = data.address || {};
                            const city = addr.city || addr.town || addr.village || addr.county || '';
                            const country = addr.country || '';
                            cachedLocation = city && country ? `${city}, ${country}` : city || country || 'Unknown location';
                        } catch (e) {
                            cachedLocation = 'Location unavailable';
                        }
                        $('#tickerLocation').text(cachedLocation);
                    },
                    () => {
                        cachedLocation = 'Location denied';
                        $('#tickerLocation').text(cachedLocation);
                    },
                    { timeout: 10000, maximumAge: 600000 }
                );
            }

            function updateTicker() {
                const now = new Date();
                $('#tickerDate').text(now.toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }));
                $('#tickerTime').text(now.toLocaleTimeString());
                if (cachedLocation) {
                    $('#tickerLocation').text(cachedLocation);
                } else if (!locationFetched) {
                    $('#tickerLocation').text('Detecting location…');
                    fetchLocation();
                }
            }

            updateTicker();
            fetchLocation();
            setInterval(updateTicker, 1000);

            // Feedback form validation
            $('#feedbackForm').on('submit', function (e) {
                e.preventDefault();
                const name = $('#fbName').val();
                const nameValid = validateNameField('fbName');
                if (!nameValid) {
                    alert('Name cannot contain numbers or special characters.');
                    return;
                }
                const email = $('#fbEmail').val();
                const beach = $('#fbBeach').val();
                const rating = parseInt($('#fbRating').val());
                const message = $('#fbMessage').val();

                if (!name || !email || !beach || !rating || !message) {
                    alert('Please fill all fields');
                    return;
                }

                const feedback = {
                    name,
                    email,
                    beach,
                    rating,
                    message,
                    date: new Date().toLocaleDateString()
                };

                let feedbacks = JSON.parse(localStorage.getItem('beachFeedbacks') || '[]');
                feedbacks.unshift(feedback);
                localStorage.setItem('beachFeedbacks', JSON.stringify(feedbacks));

                $('#feedbackSuccess').removeClass('d-none');
                this.reset();
                renderFeedbacks();
                setTimeout(() => $('#feedbackSuccess').addClass('d-none'), 3000);
            });

            function renderFeedbacks() {
                const feedbacks = JSON.parse(localStorage.getItem('beachFeedbacks') || '[]');
                const container = $('#feedbackList');
                container.empty();

                if (feedbacks.length === 0) {
                    container.html('<p class="text-muted text-center">No feedback yet. Be the first to share your experience!</p>');
                    return;
                }

                feedbacks.forEach(f => {
                    const stars = '⭐'.repeat(f.rating) + '☆'.repeat(5 - f.rating);
                    container.append(`
                        <div class="feedback-card">
                            <div class="d-flex justify-content-between align-items-start flex-wrap gap-2">
                                <div>
                                    <h6 class="mb-1 fw-bold">${f.name}</h6>
                                    <p class="small text-muted mb-1"><i class="fas fa-umbrella-beach me-1"></i>${f.beach}</p>
                                </div>
                                <div class="text-end">
                                    <div class="star-rating-display">${stars}</div>
                                    <small class="text-muted">${f.date}</small>
                                </div>
                            </div>
                            <p class="mb-0 mt-2">${f.message}</p>
                        </div>
                    `);
                });
            }

            renderFeedbacks();

            // Contact form validation
            $('#contactForm').on('submit', function (e) {
                e.preventDefault();
                const name = $('#contactName').val();
                const nameValid = validateNameField('contactName');
                if (!nameValid) {
                    alert('Name cannot contain numbers or special characters.');
                    return;
                }
                const email = $('#contactEmail').val();
                const phone = $('#contactPhone').val();
                const subject = $('#contactSubject').val();
                const message = $('#contactMessage').val();

                if (!name || !email || !subject || !message) {
                    alert('Please fill all required fields');
                    return;
            }

                const contactMessage = {
                    name,
                    email,
                    phone,
                    subject,
                    message,
                    date: new Date().toLocaleString()
                };

                let messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
                messages.unshift(contactMessage);
                localStorage.setItem('contactMessages', JSON.stringify(messages));

                $('#contactSuccess').removeClass('d-none');
                this.reset();
                setTimeout(() => $('#contactSuccess').addClass('d-none'), 5000);
            });

            $('#downloadInfoBtn').on('click', () => download('BeautyOfBeaches.pdf'));
            $('#downloadDocBtn').on('click', () => download('BeautyOfBeaches.doc'));
            function download(name) {
                const blob = new Blob(['info'], { type: 'application/octet-stream' });
                const a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = name;
                a.click();
            }

            $(window).on('scroll', () => $('#backToTop').toggleClass('show', $(window).scrollTop() > 300));
            $('#backToTop').on('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        });