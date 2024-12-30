import { css } from "lit";

export const styles = css`
    .button {
        --button-default-color: transparent;
        --button-background-color: var(--button-default-color);
        --button-border: none;
        --button-spacing: var(--spacing-12);
        --button-color: var(--color-black);
        --button-hover-background-color: var(--button-default-color);
        --button-active-color: var(--button-default-color);
        --button-hover-color: var(--button-color);
        --button-disabled-background-color: var(--color-warm-grey-100);
        --button-disabled-color: var(--color-warm-grey-400);
        --button-border-radius: 0;
        --button-dimension: 2.8125rem;
        --button-loading-color: currentColor;

        align-items: center;
        background: var(--button-background-color);
        border: var(--button-border);
        border-radius: var(--button-border-radius);
        color: var(--button-color);
        cursor: pointer;
        display: inline-flex;
        font-size: var(--font-size-functional-m);
        font-weight: var(--font-weight-functional-bold);
        gap: var(--spacing-12);
        height: var(--button-dimension);
        justify-content: center;
        max-width: 100%;
        padding-inline: var(--button-spacing);
        position: relative;
        text-align: center;
        user-select: none;
        width: auto;

        &:hover {
            background-color: var(--button-hover-background-color);
            color: var(--button-hover-color);
            text-decoration: none;
        }

        &[disabled] {
            background-color: var(--button-disabled-background-color);
            color: var(--button-disabled-color);
            pointer-events: none;
        }

        &:active {
            background-color: var(--button-active-color);
        }

        &:focus {
            color: var(--button-color);
            text-decoration: none;
        }
    }

    :host([variant="primary"]) .button {
        --button-background-color: var(--color-black);
        --button-color: var(--color-white);
        --button-hover-background-color: var(--color-warm-grey-500);
        --button-active-color: var(--color-warm-grey-500);
    }

    :host([variant="primary"][inversed]) .button {
        --button-background-color: var(--color-warm-grey-100);
        --button-color: var(--color-black);
        --button-hover-background-color: var(--color-warm-grey-300);
        --button-active-color: var(--color-warm-grey-300);
    }

    :host([variant="buy"]) .button {
        --button-background-color: var(--theme-color-100, var(--color-honey-100));
        --button-color: var(--color-white);
        --button-hover-background-color: var(--theme-color-100, var(--color-honey-200));
        --button-active-color: var(--theme-color-100, var(--color-honey-200));
    }

    :host([variant="buy"][inversed]) .button {
        --button-background-color: var(--color-warm-grey-100);
        --button-color: var(--color-black);
        --button-hover-background-color: var(--color-warm-grey-300);
        --button-active-color: var(--color-warm-grey-300);
    }

    :host([variant="secondary"]) .button {
        --button-border: var(--border-width-1) solid var(--color-warm-grey-400);
        --button-background-color: transparent;
        --button-color: var(--color-black);
        --button-hover-background-color: var(--color-warm-grey-300);
        --button-active-color: var(--color-warm-grey-300);
        --button-disabled-background-color: transparent;
    }

    :host([variant="secondary"][inversed]) .button {
        --button-border: var(--border-width-1) solid currentColor;
        --button-background-color: var(--button-color-default);
        --button-color: var(--color-white);
        --button-hover-background-color: var(--color-warm-grey-500);
        --button-active-color: var(--color-warm-grey-500);
    }

    :host([rounded]) .button {
        --button-border-radius: var(--border-radius-full);
    }

    :host([fullwidth]) .button {
        width: 100%;
    }
`;