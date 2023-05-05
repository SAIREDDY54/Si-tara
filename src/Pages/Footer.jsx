const Footer = () => {
    return (
        <div style={{ margin: '5px'}}>
            <footer class="o-footer">
                <div class="o-footer__search-container -secondary">
                    <div class="e-container">
                        <div class="o-footer__search">
                            <div class="o-footer__search-cta">Still looking for something?</div>
                            <form class="m-search-form" autocomplete="off">
                                <div class="a-text-field a-text-field--search">
                                    <input type="search" id="search-null" placeholder="Search" />
                                    <button type="submit" class="a-text-field__icon-search">
                                        <i class="a-icon ui-ic-search" title="LoremIpsum"></i>
                                    </button>
                                    <button type="button" class="a-text-field__icon-close">
                                        <i class="a-icon ui-ic-close-small" title="LoremIpsum"></i>
                                    </button>
                                </div>
                                <ul class="a-search-suggestions">
                                    <li class="a-search-suggestions__item">
                                        <a
                                            href="#"
                                            class="a-search-suggestions__result-link"
                                            tabindex="-1"
                                        >
                                            <em>Product XYZ</em>
                                            Lorem ipsum dolor
                                        </a>
                                    </li>
                                    <li class="a-search-suggestions__item">
                                        <a
                                            href="#"
                                            class="a-search-suggestions__result-link"
                                            tabindex="-1"
                                        >
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr Product
                                            XYZ another line can be very long or very short, however when
                                            text breaks and the Product XYZ is mentioned again,
                                            <em>we should highlight this</em>
                                        </a>
                                    </li>
                                    <li class="a-search-suggestions__item">
                                        <a
                                            href="#"
                                            class="a-search-suggestions__result-link"
                                            tabindex="-1"
                                        >
                                            Lorem ipsum
                                            <em>Product XYZ</em>
                                        </a>
                                    </li>
                                    <li class="a-search-suggestions__item">
                                        <a
                                            href="#"
                                            class="a-search-suggestions__result-link"
                                            tabindex="-1"
                                        >
                                            <em>Product XYZ</em>
                                            Lorem ipsum dolor
                                        </a>
                                    </li>
                                    <li
                                        class="a-search-suggestions__item a-search-suggestions__results-link"
                                    >
                                        <div class="a-link -icon">
                                            <a href="/" target="_self" tabindex="-1">
                                                <span>All</span>
                                                <span>
                                                    Results
                                                    <i
                                                        class="a-icon ui-ic-nosafe-lr-right-small"
                                                        title="nosafe-lr-right-small"
                                                    ></i>
                                                </span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="e-container">
                    <div class="o-footer__top">
                        <div class="o-footer__claim">Invented for life</div>
                        <div class="m-language-selector">
                            <div class="a-link -icon">
                                <a href="https://www.bosch.com/websites-worldwide/" target="_blank">
                                    <i class="a-icon boschicon-bosch-ic-globe" title="globe"></i>
                                    <span>Bosch Global</span>
                                </a>
                            </div>
                            <div class="a-dropdown">
                                <select
                                    id="demo"
                                    aria-label="here goes the aria label for the dropwdown"
                                >
                                    <option value='"Deutsch"'>Deutsch</option>
                                    <option value='"English"'>English</option>
                                    <option value='"Französisch"'>Französisch</option>
                                </select>
                            </div>
                        </div>
                        <ul class="o-footer__links">
                            <li>
                                <div class="a-link a-link--integrated">
                                    <a href="#" target="_self"><span>Contact Us</span></a>
                                </div>
                            </li>
                            <li>
                                <div class="a-link a-link--integrated -icon">
                                    <a href="#" target="_self">
                                        <span>Product Security</span>
                                        <span>
                                            (PSIRT)
                                            <i
                                                class="a-icon ui-ic-nosafe-lr-externallink"
                                                title="nosafe-lr-externallink"
                                            ></i>
                                        </span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="a-link a-link--integrated">
                                    <a href="#" target="_self"><span>Licenses &amp; patents</span></a>
                                </div>
                            </li>
                            <li>
                                <div class="a-link a-link--integrated -icon">
                                    <a href="#" target="_self">
                                        <span>Purchasing &amp;</span>
                                        <span>
                                            logistics
                                            <i
                                                class="a-icon ui-ic-nosafe-lr-externallink"
                                                title="nosafe-lr-externallink"
                                            ></i>
                                        </span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div class="o-footer__share">
                            <button
                                type="button"
                                class="a-button a-button--integrated -without-label"
                                aria-label="share button"
                            >
                                <i
                                    class="a-icon a-button__icon boschicon-bosch-ic-facebook"
                                    title="Lorem Ipsum"
                                ></i>
                            </button>
                            <button
                                type="button"
                                class="a-button a-button--integrated -without-label"
                                aria-label="share button"
                            >
                                <i
                                    class="a-icon a-button__icon boschicon-bosch-ic-youtube"
                                    title="Lorem Ipsum"
                                ></i>
                            </button>
                            <button
                                type="button"
                                class="a-button a-button--integrated -without-label"
                                aria-label="share button"
                            >
                                <i
                                    class="a-icon a-button__icon boschicon-bosch-ic-linkedin"
                                    title="Lorem Ipsum"
                                ></i>
                            </button>
                            <button
                                type="button"
                                class="a-button a-button--integrated -without-label"
                                aria-label="share button"
                            >
                                <i
                                    class="a-icon a-button__icon boschicon-bosch-ic-twitter"
                                    title="Lorem Ipsum"
                                ></i>
                            </button>
                        </div>
                    </div>
                    <hr class="a-divider" />
                    <div class="o-footer__bottom">
                        <ul class="o-footer__links">
                            <li>
                                <div class="a-link a-link--integrated">
                                    <a href="#" target="_self"><span>Corporate information</span></a>
                                </div>
                            </li>
                            <li>
                                <div class="a-link a-link--integrated">
                                    <a href="#" target="_self"><span>Legal notice</span></a>
                                </div>
                            </li>
                            <li>
                                <div class="a-link a-link--integrated">
                                    <a href="#" target="_self"><span>Data protection notice</span></a>
                                </div>
                            </li>
                            <li>
                                <div class="a-link a-link--integrated">
                                    <a href="#" target="_self"><span>Privacy settings</span></a>
                                </div>
                            </li>
                        </ul>
                        <div class="o-footer__copyright">
                            © Robert Bosch Gmbh 2021, all rights reserved
                        </div>
                        <button
                            type="button"
                            class="a-button a-button--integrated -without-label o-footer__back-to-top"
                            aria-label="button footer"
                        >
                            <i class="a-icon a-button__icon ui-ic-up" title="Lorem Ipsum"></i>
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer