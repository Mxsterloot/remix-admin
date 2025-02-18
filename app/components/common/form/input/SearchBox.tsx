import { Search, Cancel } from "@mui/icons-material";
import { FC, useState, useCallback, KeyboardEvent } from "react";
import { InputAdornment, TextField } from "@mui/material";

interface SearchBoxProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

const SearchBox: FC<SearchBoxProps> = ({ label, value, onChange }) => {
    const [search, setSearch] = useState<string>(value);

    const handleInputChange = useCallback((newValue: string) => {
        setSearch(newValue);
    }, []);

    const handleClear = useCallback(() => {
        setSearch("");
        onChange("");
    }, [onChange]);

    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onChange(search);
        }
    }, [onChange, search]);

    return (
        <TextField
            fullWidth
            label={label}
            value={search}
            onChange={(e) => handleInputChange(e.target.value)}
            variant="outlined"
            size="small"
            sx={{
                "& .MuiOutlinedInput-root": { borderRadius: "10px" },
            }}
            onKeyDown={handleKeyDown}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Search sx={{ color: "#4066D5" }} />
                    </InputAdornment>
                ),
                endAdornment: search && (
                    <InputAdornment position="end">
                        <Cancel 
                            sx={{ color: "orange", cursor: "pointer" }}
                            onClick={handleClear}
                        />
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default SearchBox;