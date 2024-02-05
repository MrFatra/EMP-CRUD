import { commonColors, SemanticBaseColors, semanticColors } from '@nextui-org/theme';
import React from 'react'
import { Toaster } from 'react-hot-toast';

const Alert = () => {
    return (
        <Toaster
            toastOptions={{
                duration: 2000,
                style: {color: semanticColors.dark.foreground[900]},
                success: {
                    style: {
                        background: commonColors.green[500]
                    }
                },
                error: {
                    style: {
                        background: commonColors.red[500]
                    }
                },
            }}
        />
    )
}

export default Alert