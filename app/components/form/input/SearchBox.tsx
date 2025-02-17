import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";

interface SearchBoxProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

export default function SearchBox({ label, value, onChange }: SearchBoxProps) {
    return (
        <TextField
            fullWidth
            label={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            variant="outlined"
            size="small"
            sx={{
                "& .MuiOutlinedInput-root": { borderRadius: "10px" },
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                ),
            }}
        />
    );
}