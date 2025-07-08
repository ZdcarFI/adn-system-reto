import type {LucideIcon} from 'lucide-react';
import {colorClasses} from "@/data/caso1";

export const Action = ({icon: Icon, color}: { icon: LucideIcon; color: 'blue' | 'green' | 'red' }) => {
    const {text, bg} = colorClasses[color];

    return (
        <button
            className={`p-2 cursor-pointer  rounded-full transition-colors duration-200 ${text} ${bg}`}
        >
            <Icon className="w-4 h-4"/>
        </button>
    );
};


export const Info = ({label, value}: { label: string, value: string }) => (
    <div>
        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">{label}</p>
        <p className="font-medium">{value}</p>
    </div>
);


export const PaginationButton = ({icon: Icon, onClick, disabled}: {
    icon: any,
    onClick: () => void,
    disabled: boolean
}) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className="p-2 disabled:opacity-50 disabled:cursor-not-allowed text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
    >
        <Icon className="w-5 h-5"/>
    </button>
);
